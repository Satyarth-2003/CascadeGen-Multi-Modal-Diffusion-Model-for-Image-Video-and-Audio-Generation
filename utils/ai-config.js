export const MODEL_CONFIG = {
    text: {
      name: 'phi-3-mini',
      repo: 'microsoft/phi-3-mini-4k-instruct',
      params: {
        maxTokens: 512,
        temperature: 0.7
      }
    },
    image: {
      model: 'stabilityai/stable-diffusion-xl-turbo',
      steps: 4,
      wasmPath: 'https://cdn.jsdelivr.net/npm/@ricky0123/stable-diffusion-web@latest/dist/'
    }
  }