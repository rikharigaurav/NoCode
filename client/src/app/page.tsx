'use client'

import {
  Bot,
  ChevronDown,
  Code2,
  FileInput,
  LayoutDashboard,
  Rocket,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function Dashboard() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Header */}
      <header className='sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6'>
        <div className='flex items-center gap-6'>
          <Link href='#' className='flex items-center gap-2 font-semibold'>
            <Code2 className='h-6 w-6' />
            <span className='text-lg'>NOCODE</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='sm'>
                Pre-built Flows
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start' className='w-48'>
              <DropdownMenuItem>
                <Bot className='mr-2 h-4 w-4' />
                Blog Post Creator
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bot className='mr-2 h-4 w-4' />
                Document Q&A
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bot className='mr-2 h-4 w-4' />
                Content Summarizer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button size='sm' className='transition-all hover:scale-105'>
          <Rocket className='mr-2 h-4 w-4' />
          Launch
        </Button>
      </header>

      <div className='flex flex-1'>
        {/* Sidebar */}
        <aside className='w-64 border-r'>
          <ScrollArea className='h-[calc(100vh-4rem)]'>
            <div className='flex flex-col gap-4 p-4'>
              <div>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className='flex w-full items-center justify-between rounded-md py-2 text-sm font-semibold hover:bg-muted/50'>
                    <div className='flex items-center gap-2'>
                      <Sparkles className='h-4 w-4' />
                      LLMs
                    </div>
                    <ChevronDown className='h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180' />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className='mt-2 space-y-2'>
                      <Card className='group cursor-grab border-2 transition-all hover:border-primary hover:shadow-md active:cursor-grabbing'>
                        <CardHeader className='p-2'>
                          <CardTitle className='flex items-center gap-2 text-sm'>
                            OpenAI
                            <span className='ml-auto text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100'>
                              Drag to canvas
                            </span>
                          </CardTitle>
                          <CardDescription className='text-xs'>
                            GPT-4 & GPT-3.5
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className='group cursor-grab border-2 transition-all hover:border-primary hover:shadow-md active:cursor-grabbing'>
                        <CardHeader className='p-2'>
                          <CardTitle className='flex items-center gap-2 text-sm'>
                            Mistral AI
                            <span className='ml-auto text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100'>
                              Drag to canvas
                            </span>
                          </CardTitle>
                          <CardDescription className='text-xs'>
                            Mistral-7B & Mixtral
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Separator className='my-4' />

                <Collapsible defaultOpen>
                  <CollapsibleTrigger className='flex w-full items-center justify-between rounded-md py-2 text-sm font-semibold hover:bg-muted/50'>
                    <div className='flex items-center gap-2'>
                      <FileInput className='h-4 w-4' />
                      Input
                    </div>
                    <ChevronDown className='h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180' />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className='mt-2 space-y-2'>
                      <Card className='group cursor-grab border-2 transition-all hover:border-primary hover:shadow-md active:cursor-grabbing'>
                        <CardHeader className='p-2'>
                          <CardTitle className='flex items-center gap-2 text-sm'>
                            Chat Input
                            <span className='ml-auto text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100'>
                              Drag to canvas
                            </span>
                          </CardTitle>
                          <CardDescription className='text-xs'>
                            Conversational interface
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className='group cursor-grab border-2 transition-all hover:border-primary hover:shadow-md active:cursor-grabbing'>
                        <CardHeader className='p-2'>
                          <CardTitle className='flex items-center gap-2 text-sm'>
                            Input Box
                            <span className='ml-auto text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100'>
                              Drag to canvas
                            </span>
                          </CardTitle>
                          <CardDescription className='text-xs'>
                            Text area for prompts
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Canvas */}
        <main className='flex-1 p-4'>
          <div className='flex h-full min-h-[calc(100vh-6rem)] items-center justify-center rounded-lg border-2 border-dashed transition-all hover:border-primary/50'>
            <div className='flex flex-col items-center gap-2 text-center'>
              <LayoutDashboard className='h-8 w-8 text-muted-foreground' />
              <h3 className='text-lg font-medium'>Design Canvas</h3>
              <p className='text-sm text-muted-foreground'>
                Drag and drop tools to create your workflow
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
