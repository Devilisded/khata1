import {
  IconAlertOctagonFilled,
  IconEdit,
  IconEye,
  IconTrash,
  IconUser,
  IconWallet,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import "./purright.scss";
const PurRight = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      <div className="saleCard">
        <div className="grid grid-cols-2 p-4 border-b border-slate-100 cnt">
          <div className="flex  gap-4">
            <div className="details flex flex-col gap-2 ">
              <div className="date font-semibold flex items-center gap-2 text-slate-900 text-xl">
                {"Invoice" + "#" + "5"}
              </div>
              <div className="text-sm text-slate-500 font-semibold">
                5:09 AM, 10 Sep 2023
              </div>
            </div>
          </div>
          <div className="editndel flex justify-center gap-4 self-center w-[25vw]">
            <button
              className="flex items-center gap-2 rounded text-emerald-600 p-1 hover:bg-emerald-600 hover:text-white"
              style={{
                border: "1px solid rgb(5, 150, 105)",
                transition: "all 400ms ease-in-out",
              }}
            >
              <IconEye className="w-5 h-5" />
              View Pdf
            </button>

            <button
              className="flex items-center gap-2 p-2 rounded text-amber-400 hover:text-white hover:bg-amber-500"
              style={{
                border: "1px solid rgb(245, 158, 11)",
                transition: "all 300ms ease-in-out",
              }}
            >
              <IconWallet />
              Payment In
            </button>
            <button
              className="edit flex items-center gap-2 p-2 rounded text-blue-700 hover:text-white hover:bg-blue-700"
              style={{
                border: "1px solid #2b59da",
                transition: "all 300ms ease-in-out",
              }}
            >
              <IconEdit className="w-5 h-5" /> Edit
            </button>
            <button
              className="flex items-center gap-2 del p-2 rounded text-red-600 hover:text-white hover:bg-red-600"
              style={{
                border: "1px solid #dc2626",
                transition: "all 300ms ease-in-out",
              }}
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

        <div className="flex justify-between space-x-6 items-center p-6">
          <div className="flex items-center gap-4">
            <div className="icon2 bg-cyan-50">
              <IconUser className="text-cyan-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl">Akshit</span>

              <span className="text-slate-500 text-xs">9466210083</span>
            </div>
          </div>

          <div className="flex items-center  flex-col">
            <div className="text-slate-700">₹ 5000</div>
            <div>Partially Paid</div>
          </div>
        </div>
      </div>
      <div className="p-2 m-5 bg-slate-100 text-lg font-semibold text-slate-800">
        <div>{"Items"}</div>
      </div>
      <div className="information1"></div>
      <div className="flex justify-between px-7 py-5 border-t border-slate-300 text-lg border-l">
        <div className="font-semibold">Net Amount</div>
        <div className="text-slate-800 justify-self-end font-semibold">
          ₹ 5000
        </div>
      </div>
    </div>
  );
};

export default PurRight;
