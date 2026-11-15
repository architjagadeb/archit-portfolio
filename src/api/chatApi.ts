export interface ChatHistoryMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatRequest {
  question: string
  history?: ChatHistoryMessage[]
}

export interface ChatResponse {
  answer: string
}

export async function sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
  const endpoint = `${baseUrl.replace(/\/+$/, '')}/api/chat`

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!res.ok) {
      let errorDetail = 'Failed to get an answer from the assistant.'
      try {
        const errorJson = await res.json()
        if (errorJson?.detail) {
          errorDetail =
            typeof errorJson.detail === 'string'
              ? errorJson.detail
              : JSON.stringify(errorJson.detail)
        }
      } catch {
        errorDetail = `Server error (${res.status} ${res.statusText})`
      }
      throw new Error(errorDetail)
    }

    const data: ChatResponse = await res.json()
    return data
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (
        err.message.includes('Failed to fetch') ||
        err.message.includes('NetworkError') ||
        err.message.includes('Load failed')
      ) {
        throw new Error(
          'Unable to reach the Ask Archit server. Please ensure the backend is running at ' +
            baseUrl
        )
      }
      throw err
    }
    throw new Error('An unexpected error occurred while communicating with the assistant.')
  }
}
