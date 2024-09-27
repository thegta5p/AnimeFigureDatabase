"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useState } from "react";

export const AddFigure = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [figure, setFigure] = useState({
    name: "",
    character: "",
    series: "",
    scale: "",
    price: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFigure((prevFigure) => ({
      ...prevFigure,
      [name]: value,
    }));
  };

  const handleAddFigure = async () => {
    try {
      const response = await fetch("http://localhost:4000/figures/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(figure),
      });

      if (!response.ok) {
        throw new Error("Failed to add figure");
      }

      const data = await response.json();

      alert("Figure added successfully");
      console.log("Figure added successfully", data);

      onOpenChange();

      setFigure({
        name: "",
        character: "",
        series: "",
        scale: "",
        price: "",
      });
    } catch (error) {
      console.error("Failed to add figure", error);
      alert("Failed to add figure");
    }
  };

  return (
    <div>
      <Button color="primary" onPress={onOpen}>
        Add New
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add New Figure</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  label="Name"
                  name="name"
                  placeholder="Enter figure name"
                  value={figure.name}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  label="Character"
                  name="character"
                  placeholder="Enter character name"
                  value={figure.character}
                  onChange={handleInputChange}
                />
                <Input
                  isRequired
                  label="Series"
                  name="series"
                  placeholder="Enter series name"
                  value={figure.series}
                  onChange={handleInputChange}
                />
                <Input
                  label="Scale"
                  name="scale"
                  placeholder="Enter scale"
                  value={figure.scale}
                  onChange={handleInputChange}
                />
                <Input
                  label="Price"
                  name="price"
                  placeholder="Enter price"
                  value={figure.price}
                  onChange={handleInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleAddFigure}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
