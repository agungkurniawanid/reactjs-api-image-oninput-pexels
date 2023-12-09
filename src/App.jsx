import RequestImage from "./pages/reques_img";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-white justify-center items-center">
      <h1 className="text-[24px] font-bold capitalize">Cari Semua Gambar</h1>
      <p className="text-[16px] text-red-600 font-sans mb-10">
        Disarankan dalam bahasa inggris ges!
      </p>
      <RequestImage />
    </div>
  );
}
export default App;
