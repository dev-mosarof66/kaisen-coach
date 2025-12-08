'use client'

import React, { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const TextInput = () => {
  const [search, setSearch] = useState("")

  return (
    <div className="w-full">

      {/* DESKTOP SEARCH */}
      <div className="hidden md:flex items-center gap-1 w-full max-w-md border border-gray-600 rounded-lg px-3 shadow-sm">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search players, teams, matches..."
          className="border-none focus-visible:ring-0"
        />
      </div>

      {/* MOBILE SEARCH BUTTON */}
      <div className="md:hidden block">
        <Dialog>
          <DialogTrigger asChild>
            <div className="p-2 border rounded-full active:scale-95 transition cursor-pointer flex items-center justify-center">
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
          </DialogTrigger>

          {/* MOBILE SEARCH MODAL */}
          <DialogContent className="p-6 sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-left">
                Search
              </DialogTitle>
            </DialogHeader>

            <div className="w-full flex flex-col gap-4">
              <div className="flex items-center gap-1 border rounded-lg px-3 bg-card shadow-inner">
                <Search className="w-5 h-5 text-muted-foreground" />
                <Input
                  autoFocus
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search players, teams, matches..."
                  className="border-none focus-visible:ring-0"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">Search</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default TextInput
