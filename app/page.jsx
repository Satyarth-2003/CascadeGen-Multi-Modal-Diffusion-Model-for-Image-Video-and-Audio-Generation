'use client'
import { useState, useCallback } from 'react'
import { AutoTokenizer, AutoModelForCausalLM } from '@xenova/transformers'
import { MODEL_CONFIG } from '@/utils/ai-config'
import '../styles/main.css'

export default function Home() {
  // ... [Keep all the previous useState and logic unchanged] ...

  return (
    <div className="container">
      <header className="header">
        <h1>CascadeGen</h1>
        <p>Open-Source AI Assistant</p>
      </header>

      <div className="chat-container">
        <div className="chat-history">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`message ${msg.role === 'user' 
                ? 'user-message' 
                : 'ai-message'}`}
            >
              <div className="message-sender">
                {msg.role === 'user' ? 'You' : 'CascadeGen'}
              </div>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
        </div>

        <div className="input-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything or describe an image..."
            className="input-field"
            onKeyDown={(e) => e.key === 'Enter' && generateText()}
          />
          
          <div className="button-group">
            <button
              onClick={generateText}
              disabled={loading.text || loading.image}
              className="button button-primary"
            >
              {loading.text ? 'Generating...' : 'Text'}
            </button>
            
            <button
              onClick={generateImage}
              disabled={loading.image || loading.text}
              className="button button-secondary"
            >
              {loading.image ? 'Drawing...' : 'Image'}
            </button>
          </div>
        </div>

        {image && (
          <div className="image-container">
            <img 
              src={image} 
              alt="Generated" 
              className="generated-image"
            />
          </div>
        )}
      </div>
    </div>
  )
}