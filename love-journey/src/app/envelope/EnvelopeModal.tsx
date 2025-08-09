import { useState } from 'react';
import { motion } from 'framer-motion';
import EnvelopeAnimation from '../../components/EnvelopeAnimation';

const EnvelopeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className="p-2">
        Open Envelope
      </button>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <EnvelopeAnimation onClose={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default EnvelopeModal;