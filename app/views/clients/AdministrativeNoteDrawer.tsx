"use client"

import { useState } from "react"
import { X, Bold, Italic, Strikethrough, List, ListOrdered, Link, Minus, Undo, Redo, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface AdministrativeNoteDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AdministrativeNoteDrawer({ open, onOpenChange }: AdministrativeNoteDrawerProps) {
  const [noteContent, setNoteContent] = useState("")

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[450px] p-0 gap-0 [&>button]:hidden">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)} 
              className="h-8 w-8 mr-2"
            >
              <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </Button>
            <h2 className="text-lg font-medium">Create Administrative Note</h2>
          </div>
          <Button className="bg-[#2d8467] hover:bg-[#236c53]">Save</Button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="text-sm text-gray-600 mb-4">
            The Administrative Note is just like a sticky note in your office. Use it as a reminder for yourself or for
            your team members about this client. Also, like a sticky note, these are not part of the client&apos;s
            medical record.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </div>

          {/* Editor Toolbar */}
          <div className="flex flex-wrap gap-1 mb-2 border-b pb-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Strikethrough className="h-4 w-4" />
            </Button>
            <div className="h-8 border-r mx-1"></div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="h-8 border-r mx-1"></div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Link className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Minus className="h-4 w-4" />
            </Button>
            <div className="h-8 border-r mx-1"></div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Undo className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Redo className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Image className="h-4 w-4" />
            </Button>
          </div>

          {/* Editor Content */}
          <div className="min-h-[200px] mb-4">
            <textarea
              className="w-full h-full min-h-[200px] p-2 border-0 focus:outline-none resize-none"
              placeholder="Begin typing here..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            ></textarea>
          </div>

          <div className="text-sm text-gray-600">
            If you want to notify a team member about this, send them a Secure Message.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

