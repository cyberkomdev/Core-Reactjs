import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

export const PageLoading = (
    <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth">
                <div className="row w-100">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-dark text-left p-5">
                            <ClimbingBoxLoader color="#36D7B7" css={override} size={10} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const LoadingChild = (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
            <div className="row w-100">
                <div className="col-lg-4 mx-auto">
                    <div className="auth-form-dark text-left p-5">
                        <ClimbingBoxLoader color="#36D7B7" css={override} size={10} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)