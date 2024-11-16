import React, { useState, useEffect } from "react";
import "./elementTransfer.css";

//ElementTransfer component

export default function ElementTransfer() {
  const initialItems = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  const [b1Items, setB1Items] = useState(initialItems);
  const [b2Items, setB2Items] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [disabled, setDisabled] = useState({
    add: true,
    remove: true,
    addAll: true,
    removeAll: true,
  });

  // Toggles the selection of the given item

  const toggleSelection = (item) => {
    if (!item) return;

    // Check if the item is from Bucket 1 or Bucket 2
    const isFromBucket1 = b1Items.includes(item);
    const isFromBucket2 = b2Items.includes(item);

    // If the item is from Bucket 1 and there are selected items from Bucket 2,
    // don't allow the selection
    if (isFromBucket1 && selectedItems.some((i) => b2Items.includes(i))) {
      alert("Don't select item from Bucket 2");
      return;
    }

    // If the item is from Bucket 2 and there are selected items from Bucket 1,
    // don't allow the selection
    if (isFromBucket2 && selectedItems.some((i) => b1Items.includes(i))) {
      alert("Don't select item from Bucket 1");
      return;
    }

    // Toggle the selection of the item
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  // Handles the add button click

  const handleAdd = () => {
    const itemsToAdd = selectedItems.filter((item) => b1Items.includes(item));
    setB2Items((prev) => [...prev, ...itemsToAdd]);
    setB1Items((prev) => prev.filter((item) => !itemsToAdd.includes(item)));
    setSelectedItems([]);
  };

  // Handles the remove button click

  const handleRemove = () => {
    const itemsToRemove = selectedItems.filter((item) =>
      b2Items.includes(item)
    );
    setB1Items((prev) => [...prev, ...itemsToRemove]);
    setB2Items((prev) => prev.filter((item) => !itemsToRemove.includes(item)));
    setSelectedItems([]);
  };

  //Handles the add all button click

  const handleAddAll = () => {
    setB2Items((prev) => [...prev, ...b1Items]);
    setB1Items([]);
    setSelectedItems([]);
  };

  // Handles the remove all button click

  const handleRemoveAll = () => {
    setB1Items((prev) => [...prev, ...b2Items]);
    setB2Items([]);
    setSelectedItems([]);
  };

  useEffect(() => {
    setDisabled({
      add: !selectedItems.some((item) => b1Items.includes(item)),
      remove: !selectedItems.some((item) => b2Items.includes(item)),
      addAll: b1Items.length === 0,
      removeAll: b2Items.length === 0,
    });
  }, [selectedItems, b1Items, b2Items]);

  return (
    <div className="elementTransfer">
      <div className="bucket">
        <h4 className="bucket-title mt-4">Bucket 1</h4>
        {b1Items.map((item) => (
          <div
            key={item}
            className="bucketlist"
            style={{
              border: selectedItems.includes(item)
                ? "3px solid blue"
                : "2px solid green",
              backgroundColor: selectedItems.includes(item)
                ? "#02ff3d"
                : "#ffffff",
            }}
            onClick={() => toggleSelection(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button
          className="button-add"
          disabled={disabled.add}
          onClick={handleAdd}
          role="button"
        >
          Add
        </button>
        <button
          className="button-remove"
          disabled={disabled.remove}
          onClick={handleRemove}
          role="button"
        >
          Remove
        </button>
        <button
          className="button-add"
          onClick={handleAddAll}
          disabled={disabled.addAll}
          role="button"
        >
          Add All
        </button>
        <button
          className="button-remove"
          onClick={handleRemoveAll}
          disabled={disabled.removeAll}
          role="button"
        >
          Remove All
        </button>
      </div>

      <div className="bucket">
        <h4 className="bucket-title mt-4">Bucket 2</h4>
        {b2Items.map((item) => (
          <div
            key={item}
            className="bucketlist"
            disabled
            style={{
              border: selectedItems.includes(item)
                ? "3px solid blue"
                : "2px solid red",
              backgroundColor: selectedItems.includes(item)
                ? "#ff0a0a"
                : "#ffffff",
            }}
            onClick={() => toggleSelection(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
