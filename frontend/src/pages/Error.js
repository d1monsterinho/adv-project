import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
    const errorResponse = useRouteError();

    let title = 'Error Occurred!';
    let message = 'Something went wrong.';

    if (errorResponse.status === 500) {
        title = 'Internal Server Error.';
        message = JSON.parse(errorResponse.data).message;
    }

    if (errorResponse.status === 404) {
        title = 'Not Found Error.';
        message = 'Not Found 404 error occurred.';
    }

    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}