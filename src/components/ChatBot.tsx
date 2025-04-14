"use client"
import { useChat, type UseChatOptions } from "@ai-sdk/react"
import { type Message } from "@/components/ui/chat-message"
import { cn } from "@/lib/utils"
import { Chat } from "@/components/ui/chat"
 
type ChatBotProps = {
  initialMessages?: UseChatOptions["initialMessages"]
}
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ChatBot(props: ChatBotProps) {
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
    api: "http://localhost:8000/api/chat",
    body: {
        stream: true,
    },
    onError: (error) => {
        console.error("Chat error:", error);
    },
});

 
  return (
    <div className={cn("flex", "flex-col", "h-[500px]", "w-full")}>
 
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
          "What are the technologies the developer uses?",
          "What is the developer's favorite frontend technology?",
          "What security implementations does the developer use?",
          "Does the developer use any AI tools?",
        ]}
      />
    </div>
  )
}