import { useState } from "react";

const App = () => {

  
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ topic, detail });
    setTask(copyTask);
    setTopic("");
    setDetail("");
  };

  
  const deleteNote = (idx) => {
    const copyTask = [...task];
  copyTask.splice(idx,1);
  setTask(copyTask);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col md:flex-row  items-center justify-center">
      <div>
        <button></button>
      </div>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="flex flex-col  md:flex-row justify-between items-center w-full md:w-3/5 h-5/6 
    bg-gray-200/10 backdrop-blur-lg border border-gray-300/20 ml-6
    rounded-3xl shadow-2xl p-6 md:p-10"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl text-white font-semibold mb-6 md:mb-8 text-center md:text-left">
            Add New Note
          </h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="bg-gray-300/20 backdrop-blur-md
           border-gray-400/30
          text-white placeholder-gray-300
          p-4 rounded-xl mb-6 outline-none
          focus:ring-2 focus:ring-gray-400"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />

          <textarea
            placeholder="Enter Details Here..."
            rows="5"
            className="bg-gray-300/20 backdrop-blur-md
          border border-gray-400/30
          text-white placeholder-gray-300
          p-4 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-gray-400
          "
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>

          <button
            className="bg-gray-500/30 backdrop-blur-md
          border border-gray-400/30
          text-white font-medium
          py-3 rounded-xl
          hover:bg-gray-400/50 hover:scale-105
          transition-all duration-300 ease-in-out cursor-pointer"
          >
            ADD NOTES
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdnai.iconscout.com/ai-image/premium/thumb/ai-cute-student-girl-writing-in-notebook-with-pencil-3d-illustration-png-download-jpg-13221700.png"
            className="w-3/4 mt-10 md:w-4/5 object-contain opacity-80"
            alt="notes"
          />
        </div>
      </form>

      <div
        className="   bg-gray-200/10 backdrop-blur-lg border border-gray-400/20 
  shadow-2xl    p-6 ml-6  md:p-10 w-full mr-5 md:w-1/2 h-[80vh] rounded-xl flex md:flex-col mt-5"
      >
        <h1 className="text-2xl text-white text-center mb-4">Notes</h1>
        <div className="flex  flex-wrap overflow-y-auto h-full  gap-5 mt-5 ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between h-52 w-40 rounded-2xl mt-5 bg-white "
              >
                <div>
                  <h1 className="p-2 text-xl font-bold leading-tight text-center">
                    {elem.topic}
                  </h1>
                  <p className="p-2 font-semibold text-gray-500  text-xs opacity-90 leading-tight">
                    {elem.detail}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-700  rounded p-1 m-3 hover:bg-red-900   hover:scale-90 text-white
          transition-all duration-300 opacity-80 ease-in-out text-sm cursor-pointer"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default App;
