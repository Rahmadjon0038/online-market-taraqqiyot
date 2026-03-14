import toast from "react-hot-toast"

export const useGetNotify = () => {
    const notify = (status, msg) => {
        if (status == 'ok') {
            toast.success(msg)
        }
        else {
            toast.error(msg)
        }
    }

    return notify
}