import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import "./exright.scss";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { IconAlertOctagonFilled } from "@tabler/icons-react";
const ExRight = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="exright">
      <div className="exCard">
        <div className="grid grid-cols-3 p-4 border-b border-slate-100 cnt">
          <div className="flex col-span-2 gap-4">
            <div className="details flex flex-col gap-2 ">
              <div className="date font-semibold flex items-center gap-2 text-slate-900 text-xl">
                Stationery #1
              </div>
              <div className="text-sm text-slate-500 font-semibold">
                10 Sep 2023
              </div>
            </div>
          </div>
          <div className="editndel flex justify-center gap-20 self-center">
            <button className="edit flex items-center gap-2 p-2 rounded text-blue-700 hover:text-white hover:bg-blue-700">
              <IconEdit className="w-5 h-5" /> Edit
            </button>
            <button
              className="flex items-center gap-2 del p-2 rounded text-red-600 hover:text-white hover:bg-red-600"
              onClick={handleClickOpen}
            >
              <IconTrash className="w-5 h-5" /> Delete
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="flex">
                <div className="pt-5 pl-3">
                  <IconAlertOctagonFilled size={60} className="text-red-600" />
                </div>
                <div>
                  <DialogTitle id="alert-dialog-title">
                    Are You Sure ?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You are about to delete this Entry This action cannot be
                      undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions className="flex gap-4">
                    <button className="pb-3" onClick={handleClose}>
                      Cancel
                    </button>
                    <button
                      className="delete-btn text-red-600 pb-3 pr-3"
                      onClick={handleClose}
                      autoFocus
                    >
                      Delete Entry
                    </button>
                  </DialogActions>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="p-2 m-5 bg-slate-100 text-lg font-semibold text-slate-800">
        Items
      </div>
    </div>
  );
};

export default ExRight;
