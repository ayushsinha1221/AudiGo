import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - AudiGo`;
        } else {
            document.title = 'AudiGo | Shop Audio on the Go';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
