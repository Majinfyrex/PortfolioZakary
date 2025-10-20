import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


function Testimonials() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const imageMap = {
    FocusLogo: imgFocusMsg,
    AfagoLogo: imgAfagoMsg,
  };

  const openModal = (imageKey) => {
    setModalImage(imageMap[imageKey]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImage('');
  };

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#060022] to-[#00093d] py-20 px-8 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl gradient-text font-extrabold text-center mb-4 tracking-wide">
        {t('testimonialsTitle')}
      </h2>
      <p className="text-lg text-white text-center mb-16">
        {t('clickImageToView')}
      </p>
      
      <div className="flex flex-wrap justify-center gap-12">
        {/* Imagem 1 */}
        <div
          onClick={() => openModal('FocusLogo')}
          className="w-48 h-48 bg-transparent rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.6)] transition-all transform hover:scale-110 cursor-pointer"
        >
          <img
            src={imgFocusLogo}
            alt={t('client1')}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem 2 */}
        <div
          onClick={() => openModal('AfagoLogo')}
          className="w-48 h-48 bg-transparent rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.6)] transition-all transform hover:scale-110 cursor-pointer"
        >
          <img
            src={imgAfagoLogo}
            alt={t('client2')}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="relative max-w-3xl w-full max-h-[80vh] bg-white rounded-2xl shadow-3xl transform scale-100 transition-transform duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-black text-4xl font-bold focus:outline-none hover:text-red-600 transition-colors duration-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt={t('enlargedImage')}
              className="w-full h-auto max-h-[80vh] object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
