"use client";

import { ChevronsLeftRight } from "lucide-react";

import {
    Avatar, 
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu";
import { useUser } from "@clerk/clerk-react";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const UserItem = () => {
    const {user} = useUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-5 w-5">
                            <AvatarImage src={user?.imageUrl}/>
                        </Avatar>
                        <span className="text-start font-medium line-clamp-1">
                            {user?.fullName}&apos;s Ootion
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
            className="w-80"
            align="start"
            alignOffset={11}
            forceMount
            >
                <div className="flex flex-col space-y-4 p-2">

                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 