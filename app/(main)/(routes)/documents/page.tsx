"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className="h-full items-center justify-center flex flex-col">
      <Image 
        src="/empty.png"
        alt="Empty"
        width={300}
        height={300}
        className=""
      />
      <h2>
        Welcome to {user?.firstName}&apos;s Ootion
      </h2>
      <Button>
        <PlusCircle 
        className="h-4 w-4 mr-2"/>
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
