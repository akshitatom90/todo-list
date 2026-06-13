import { useState } from "react";
import { useNavigate } from "react-router";
import { logoutUser } from "../services";



interface ProfileMenuProps {
  name: string;
}

function ProfileMenu({ name }: ProfileMenuProps) {
     const navigate = useNavigate();

  const [open, setOpen] = useState(false);

 async function handellogout() {
     const isconfirmed = confirm("are you sure you want to logout");
 
     if (!isconfirmed) {
       return;
     }
     
     const data = await logoutUser();
     console.log(data, "logouttttt");
     navigate("/login");
   }

  return (
    <div style={{position: "relative"}}>

      <button  onClick={() => setOpen(!open)}>
        {name?.charAt(0).toUpperCase()}
      </button>

      {open && (
        <div

        style={{
              position: "absolute",
              right: 0,
              background: "white",
              border: "1px solid black",
              padding: "10px"
        }}
        >
          <p>Edit</p>
          <p onClick={handellogout}>Logout</p>
        </div>
      )}

    </div>
  );
}

export default ProfileMenu;