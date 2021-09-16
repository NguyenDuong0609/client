import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function AddEditUser() {
    const classes = useStyles();
    const [modal, setModal] = React.useState(false);
    
    return(
        <Dialog
              fullWidth = "true"
              open={modal}
              keepMounted
              onClose={() => setModal(false)}
              aria-labelledby="modal-slide-title"
              aria-describedby="modal-slide-description"
              style={{ paddingBottom: "400px", with: "1000px" }}
            >
              <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              >
                <button type="button" onClick={() => setModal(false)} class="close" data-dismiss="modal" aria-hidden="true">
                  <i class="material-icons">clear</i>
                </button>
              </DialogTitle>
               <form id="RegisterValidation" action="" method="">
                  <div className="card ">
                    <div className="card-header card-header-rose card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">mail_outline</i>
                      </div>
                      <h4 className="card-title">Register Form</h4>
                    </div>
                    <div className="card-body ">
                      <div className="form-group">
                        <label for="exampleEmail" className="bmd-label-floating">
                          {" "}
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleEmail"
                          required="true"
                        />
                      </div>
                      <div className="form-group">
                        <label for="examplePassword" className="bmd-label-floating">
                          {" "}
                          Password *
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="examplePassword"
                          required="true"
                          name="password"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          for="examplePassword1"
                          className="bmd-label-floating"
                        >
                          {" "}
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="examplePassword1"
                          required="true"
                          equalTo="#examplePassword"
                          name="password_confirmation"
                        />
                      </div>
                      <div className="category form-category">
                        * Required fields
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <div className="form-check mr-auto">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            required
                          />{" "}
                          Subscribe to newsletter
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </label>
                      </div>
                      <button type="submit" className="btn btn-rose">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
            </Dialog>
    );
}