"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Inputs/Input";
import Select from "@/app/components/Inputs/Select";
import LoadingModal from "@/app/components/LoadingModal";
import Modal from "@/app/components/Modal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
  users: User[];
  isOpen?: boolean;
  onClose: () => void;
};

const GroupChatModal = ({ users, onClose, isOpen }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/conversations", {
        ...data,
        isGroup: true,
      });
      router.refresh();
      onClose();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingModal />}
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Create a group chat
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Create a chat with more than 2 people.
              </p>
              <div className="mt-10 flex flex-col gap-y-8">
                <Input
                  disabled={isLoading}
                  label="Name"
                  id="name"
                  errors={errors}
                  required
                  register={register}
                />
                <Select
                  disabled={isLoading}
                  label="Members"
                  options={users.map((user) => ({
                    label: user.name,
                    value: user.id,
                  }))}
                  onChange={(value) =>
                    setValue("members", value, {
                      shouldValidate: true,
                    })
                  }
                  value={members}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button
              disabled={isLoading}
              onclick={onClose}
              type="button"
              secondary
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default GroupChatModal;
