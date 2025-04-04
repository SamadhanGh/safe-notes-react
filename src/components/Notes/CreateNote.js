import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdEditNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

const CreateNote = () => {
  const navigate = useNavigate();
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (content) => {
    setEditorContent(content);
  };

  const handleSubmit = async () => {
    if (editorContent.trim().length === 0) {
      return toast.error("Please write something before saving!");
    }
    try {
      setLoading(true);
      await api.post("/notes", { content: editorContent });
      toast.success("Note saved successfully!");
      navigate("/notes");
    } catch (err) {
      toast.error("Error saving note!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white text-gray-900 shadow-lg rounded-xl p-6 w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <MdEditNote className="text-blue-500 text-3xl" />
          <h1 className="text-xl font-semibold text-gray-800">Create a New Note</h1>
        </div>

        {/* Red Border Box */}
        <div className="border border-red-300 rounded-md overflow-hidden mb-4 shadow-md">
  <ReactQuill
    className="bg-white border-none h-[250px]" // 👈 Height Bada Kiya
    value={editorContent}
    onChange={handleChange}
    modules={{
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote"],
        ["clean"],
      ],
    }}
  />
</div>


        {/* Save Button */}
        <div className="flex justify-end">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 text-sm font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Note"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
