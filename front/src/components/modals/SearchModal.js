import HeaderModal from "./HeaderModal";

const SearchModal = ({ isModalOpen, headingModal, onClose }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <HeaderModal
        isOpen={isModalOpen}
        headingModal={headingModal}
        onClose={onClose}
      />
    </div>
  );
};

export default SearchModal;
