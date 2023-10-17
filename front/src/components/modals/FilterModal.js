import HeaderModal from "./HeaderModal";

const FilterModal = ({ isModalOpen, onClose }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <HeaderModal
        isOpen={isModalOpen}
        headingModal="Filter"
        onClose={onClose}
      />
    </div>
  );
};

export default FilterModal;
