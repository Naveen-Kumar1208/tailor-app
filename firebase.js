// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCveWcrfYejvSspl45HhjOJP25bkDAy8U4",
  authDomain: "tailor-21cd1.firebaseapp.com",
  projectId: "tailor-21cd1",
  storageBucket: "tailor-21cd1.appspot.com",
  messagingSenderId: "55975440807",
  appId: "1:55975440807:web:7fb9b7d0b5aad55a7e4682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

const colRef = collection(db, "customer");

getDocs(colRef)
	.then((snapshot) => {
		let customers = [];

		snapshot.docs.forEach((doc) => {
			customers.push({ ...doc.data(), id: doc.id });
		});
		console.log(customers);
	})
	.catch((error) => {
		console.log(error.message);  
	});


	 
    // const[waitingOrder, setWaitingOrder] = useState([]);
    // const[stitchingOrder, setStitchingOrder] = useState([]);
    // const[delayedOrder, setDelayedOrder] = useState([]);
    // const[completedOrder, setCompletedOrder] = useState([]);
    // const[cancelledOrder, setCancelledOrder] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const waitingOrderCol = query(collection(db, 'Orders'), where("status", "==", "waiting"));
    //         const waitingOrderSnapshot = await getDocs(waitingOrderCol);
    //         const waitingOrderList = waitingOrderSnapshot.docs.map(doc => doc.data());
    //         setWaitingOrder(waitingOrderList);
    //     })()
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const stitchingOrderCol = query(collection(db, 'Orders'), where("status", "==", "stitching"));
    //         const stitchingOrderSnapshot = await getDocs(stitchingOrderCol);
    //         const stitchingOrderList = stitchingOrderSnapshot.docs.map(doc => doc.data());
    //         setStitchingOrder(stitchingOrderList);
    //     })()
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const delayedOrderCol = query(collection(db, 'Orders'), where("status", "==", "delayed"));
    //         const delayedOrderSnapshot = await getDocs(delayedOrderCol);
    //         const delayedOrderList = delayedOrderSnapshot.docs.map(doc => doc.data());
    //         setDelayedOrder(delayedOrderList);
    //     })()
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const completedOrderCol = query(collection(db, 'Orders'), where("status", "==", "completed"));
    //         const completedOrderSnapshot = await getDocs(completedOrderCol);
    //         const completedOrderList = completedOrderSnapshot.docs.map(doc => doc.data());
    //         setCompletedOrder(completedOrderList);
    //     })()
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const cancelledOrderCol = query(collection(db, 'Orders'), where("status", "==", "cancelled"));
    //         const cancelledOrderSnapshot = await getDocs(cancelledOrderCol);
    //         const cancelledOrderList = cancelledOrderSnapshot.docs.map(doc => doc.data());
    //         setCancelledOrder(cancelledOrderList);
    //     })()
    // }, []);