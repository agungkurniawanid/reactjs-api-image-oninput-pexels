import AnimalImage from "../components/image/image";
import Input from "../components/input/input";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestImage = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${text}&per_page=1`,
          {
            headers: {
              Authorization: "Ft9fR15Cqpee61GcSyldWGfsbjCT3XKTS9RV5yUmxFnzpPSkMgSJcAsh",
              'Content-Type': 'application/json',
            },
          }
        );

        const imageUrl = response.data.photos[0]?.src.medium;
        setImage(imageUrl || null);
      } catch (error) {
        console.error("Error fetching image:", error);
        setImage(null);
      } finally {
        setLoading(false);
      }
    };

    if (text) {
      fetchImage();
      setInputError(false); // Reset input error when text is not empty
    } else {
      setInputError(true);
      setImage(null); // Clear image when text is empty
    }
  }, [text]);

  return (
    <div className="flex flex-col gap-8">
      {inputError ? (
        <h1 className="font-bold capitalize text-center">Anda belum input gambar</h1>
      ) : loading ? (
        <h1 lassName="font-bold capitalize text-center">Meminta gambar...</h1>
      ) : image ? (
        <AnimalImage src={image} />
      ) : (
        <h1 lassName="font-bold capitalize text-center">Gambar tidak ditemukan</h1>
      )}
      <Input
        placeholder="Contoh : Mountain"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default RequestImage;
