import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function Survey() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "15px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Give Feedback
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>My Custom Dialog</ModalHeader> */}
          <IconButton
            aria-label="Close survey"
            icon={<CloseIcon />}
            onClick={onClose}
            position="absolute"
            top="5px"
            right="5px"
            size="sm"
            background="transparent"
            _hover={{ bg: "red.200" }}
          />
          <ModalBody>
            <iframe
              src="https://qualtricsxmrcdv9zxbz.qualtrics.com/jfe/form/SV_5jOy4YtMuTA8cjc?FirstName=Ruksana"
              width="500px"
              height="400px"
            ></iframe>
          </ModalBody>
          {/* <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Survey;
