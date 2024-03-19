"use client";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

type Props = {
  data: User;
};

const UserBox = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await axios.post("/api/conversations", {
        userId: data.id,
      });
      router.push(`/conversations/${res.data.id}`);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [data, router]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="relative flex w-full cursor-pointer items-center space-x-3 rounded-lg bg-white 
      p-3 transition hover:bg-neutral-100"
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
