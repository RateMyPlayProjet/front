import React, { useState, useEffect } from "react";
import axios from "axios";

const HttpExample = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/game',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTA2Nzg0OTUsImV4cCI6MTcxMDY4MjA5NSwicm9sZXMiOlsiQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbiJ9.I1rhXvzPRDcIMWzovuEJQ6I7VZJdohJ4sySXAEnnQrkDz4itONMMLcbTDC0_Qr7fKDxXbWB_1vpl2HhT0uFXOyPRRDaJe6mbP-qpAspq2xgd_Kk6PXS40STu5YDc1f1kvLntMOBu2ZVMz1Fu13xH_JEGzJhXxJtsldQBv4Ck2ijEYa_dpSB6ELqXuZWUi-R1ED-HjOwJJAazZjcNHlf5FNbWeC9XMf2cR-fYIKpN1n8zGuQz1Vo0_8xRX6EjJIuW4TSA6lNDcLr_r3Wj2UWOcDEbv8rIxUeuEbooNveWC5CLCoWlMXd2VUbFF4SdYH69VXAxo3ySDdELsgk-qX0l4bkI5A4KZ_cvGAYgZY8eHVnMxFXHS9GvHUj5yCbwJBB_EQwh6JQq83IJ6dYjDJss8YMuUiaNe9cmkK-BdFk_IiSsubtVnyfsRBQ7d_EiaIaicapUe5qBkG6V3XoVxM8AM3Jkl9cFGlVwUeXZHWfe4uWDBia40joPM_buYT4sd4wD2b--t0XuU4DKSI1QNn4AtwAsmOagUgkHYMYJD3GtBoP2Kk5CZ_CJ_BSKEH6uAsgcI4P48DD1owqqy63jgM9tNbQ6gl7r84wNkgdAT4Rc7AcXYI-6CO9rOrm87YrcH_x44qmKnK0AbMz9E87F7MU6WEuW3TAl27OFsu1wXFS30l0'
      }
    };
    
    axios.request(config)
    .then((response) => {
      const gameData = response.data;
      const gameTitles = gameData.map(game => game.name); // Récupérer les noms des jeux
      setTitles(gameTitles); // Mettre à jour le state avec les noms des jeux
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HttpExample;
