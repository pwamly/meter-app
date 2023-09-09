import { Link, Outlet } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

function Photo() {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState<any>(null);
  const [takePhoto, setTakePhoto] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const videoConstraints = {
    width: 100,
    height: 180,
    facingMode: { exact: "environment" },
  };

  // Function to handle image selection from the user's device
  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result);
        setTakePhoto(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "400px", // Adjust the card height as needed
        background: "",
      }}
    >
      <div
        id="camera-stream"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "90%",
        }}
      >
        {imgSrc && <img src={imgSrc} alt="img" style={{ maxHeight: "300px" }} />}
        {takePhoto ? (
          <>
            <input name="" placeholder="Enter Unit Readings (1130.7)" />
            <Button variant="contained" disableElevation fullWidth onClick={() => capture()}>
              Take Photo
            </Button>
            <Button variant="contained" disableElevation fullWidth color="error" disabled>
              Cancel
            </Button>
          </>
        ) : (
          <>
            {/* Input element for selecting an image from storage */}
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="imageInput" />
            <label htmlFor="imageInput">
              <img
                id="photo"
                src={require("../../assets/cameraicon.png")}
                alt="Camera Icon"
              />
            </label>
          </>
        )}
      </div>
    </Card>
  );
}

export default Photo;
