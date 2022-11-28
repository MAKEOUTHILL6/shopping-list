import { ShoppingItem } from "@prisma/client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { trpc } from "../utils/trpc";

interface ItemModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  setItems: Dispatch<SetStateAction<ShoppingItem[]>>
}

const ItemModal: FC<ItemModalProps> = ({ setModal, setItems }) => {

  const addItem = trpc.items.addItem.useMutation({onSuccess: (data) => {
    setItems((prev) => [...prev, data])
  }});
  
  const [input, setInput] = useState<string>("");

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 bg-white p-3">
        <h3 className="text-xl font-medium">Name of item</h3>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-white"
        />
        <div className="grid grid-cols-2 gap-5">
          <button
            onClick={() => setModal(false)}
            type="button"
            className="rounded-md bg-gray-500 p-1 text-sm text-white transition hover:bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={() => {
                addItem.mutate({name: input, checked: false})
                setModal(false)
            }}
            type="button"
            className="rounded-md bg-violet-500 p-1 text-sm text-white transition hover:bg-violet-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
