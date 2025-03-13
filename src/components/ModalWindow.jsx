function ModalWindow({ children }) {
  return (
    <div className="bg-white p-40 text-black fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 o
     shadow-2xl">
      {children}
    </div>
  );
}

export default ModalWindow;
