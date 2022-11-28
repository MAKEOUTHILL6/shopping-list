import { Dispatch, FC, SetStateAction } from "react";

interface ItemModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const ItemModal: FC<ItemModalProps> = ({ setModal }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 bg-white p-3">
        <h3 className="text-xl font-medium">Name of item</h3>
        <input
          type="text"
          className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-white"
        />
        <div className="grid grid-cols-2 gap-5">
          <button
            type="button"
            className="rounded-md bg-gray-500 p-1 text-sm text-white transition hover:bg-gray-600"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>

          <button
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
