import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  IconButton,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

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
          <CloseButton
            aria-label="Close survey"
            onClick={onClose}
            position="absolute"
            top="5px"
            right="5px"
            size="sm"
            zIndex={10}
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
