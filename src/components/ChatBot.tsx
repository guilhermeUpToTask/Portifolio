"use client"
import { useChat } from "@ai-sdk/react"
import { type Message } from "@/components/ui/chat-message"
import { cn } from "@/lib/utils"
import { Chat } from "@/components/ui/chat"
import { useTranslation } from 'react-i18next'
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ChatBot() {
  const { t } = useTranslation();
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
    setMessages,
} = useChat({
    api: "https://taskmaneger.zapto.org/api/rag/api/chat",
    body: {
        stream: true,
    },
    onError: (error) => {
        console.error("Chat error:", error);
    },
});

 
  return (
    <div className={cn("flex", "flex-col", "h-[500px]", "w-full", "overflow-y-auto")}>
 
      <Chat
        className="grow"
        messages={messages as Message[]}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        setMessages={setMessages}
        suggestions={[
          t('chat.suggestions.technologies'),
          t('chat.suggestions.favorite_tech'),
          t('chat.suggestions.security'),
          t('chat.suggestions.ai_tools'),
        ]}
      />
    </div>
  )
}