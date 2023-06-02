import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const bookEntry = {
  kind: "books#volume",
  id: "ZWRQEAAAQBAJ",
  etag: "+iHncKZkjPg",
  selfLink: "https://www.googleapis.com/books/v1/volumes/ZWRQEAAAQBAJ",
  volumeInfo: {
    title: "Babel",
    subtitle:
      "Or the Necessity of Violence: An Arcane History of the Oxford Translators' Revolution",
    authors: ["R. F. Kuang"],
    publisher: "HarperCollins",
    publishedDate: "2022-08-23",
    description:
      "\u003cp\u003eInstant #1 New York Times Bestseller from the author of The Poppy War  \u003c/p\u003e\u003cp\u003e“Absolutely phenomenal. One of the most brilliant, razor-sharp books I've had the pleasure of reading that isn't just an alternative fantastical history, but an interrogative one; one that grabs colonial history and the Industrial Revolution, turns it over, and shakes it out.” -- Shannon Chakraborty, bestselling author of The City of Brass\u003c/p\u003e\u003cp\u003eFrom award-winning author R. F. Kuang comes Babel, a thematic response to The Secret History and a tonal retort to Jonathan Strange & Mr. Norrell that grapples with student revolutions, colonial resistance, and the use of language and translation as the dominating tool of the British empire.\u003c/p\u003e\u003cp\u003eTraduttore, traditore: An act of translation is always an act of betrayal.\u003c/p\u003e\u003cp\u003e1828. Robin Swift, orphaned by cholera in Canton, is brought to London by the mysterious Professor Lovell. There, he trains for years in Latin, Ancient Greek, and Chinese, all in preparation for the day he’ll enroll in Oxford University’s prestigious Royal Institute of Translation—also known as Babel.\u003c/p\u003e\u003cp\u003eBabel is the world's center for translation and, more importantly, magic. Silver working—the art of manifesting the meaning lost in translation using enchanted silver bars—has made the British unparalleled in power, as its knowledge serves the Empire’s quest for colonization.\u003c/p\u003e\u003cp\u003eFor Robin, Oxford is a utopia dedicated to the pursuit of knowledge. But knowledge obeys power, and as a Chinese boy raised in Britain, Robin realizes serving Babel means betraying his motherland. As his studies progress, Robin finds himself caught between Babel and the shadowy Hermes Society, an organization dedicated to stopping imperial expansion. When Britain pursues an unjust war with China over silver and opium, Robin must decide…\u003c/p\u003e\u003cp\u003eCan powerful institutions be changed from within, or does revolution always require violence? \u003c/p\u003e",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "0063021447",
      },
      {
        type: "ISBN_13",
        identifier: "9780063021440",
      },
    ],
    readingModes: {
      text: true,
      image: false,
    },
    pageCount: 560,
    printedPageCount: 814,
    printType: "BOOK",
    categories: [
      "Fiction / Fantasy / Historical",
      "Fiction / Fantasy / Epic",
      "Fiction / Literary",
      "Fiction / Alternative History",
      "Fiction / Fantasy / Dark Fantasy",
      "Fiction / Fairy Tales, Folk Tales, Legends & Mythology",
    ],
    averageRating: 3.5,
    ratingsCount: 17,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: true,
    contentVersion: "1.6.6.0.preview.2",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        //   128w
        "http://books.google.com/books/publisher/content?id=ZWRQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70s_DDv2DwhA2wrZJaRA6aRCuV80iXBgEIwBtcpYxIB2nCXzu14QGAE1283TsFQFu7V5Ybc4lvP0y_QaC6_4UEGU67hy_U5naIu-sP99k5YGJOSyKYseQGQgMBTJzBbmj2K68kI&source=gbs_api",
      thumbnail:
        //   128w
        "http://books.google.com/books/publisher/content?id=ZWRQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73yF-xQs7E6LGskixkpkccxjbAu9wREjiuqp4rQuja2_bLvutMg7zn8zhc1cRWmZXfgIQTlX1HJA5TrBWu-AlKHzdL5-4MKRUuCAfgH-8p23RGWufiJNNwozFxHQz4XOa-XGw7q&source=gbs_api",
      small:
        //   300w
        "http://books.google.com/books/publisher/content?id=ZWRQEAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72qVSzUUxxgFDXG2mMEaaZ2o1lp7MLohYvZsrsDROUag_MiNd9zTtVvj7sqxZF9bOUUvKg28vuwGKNTgKBWqs_rPAgGfk5CollWnyEbWabu9__BI-Yas5QgQLuOT5lGilH8ALSD&source=gbs_api",
      medium:
        //   575w
        "http://books.google.com/books/publisher/content?id=ZWRQEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71isbx2Pz4FtSwKe2kOdJuzhEpRHcpURSo4EeFJIL14NGoyr22jC7ksNxikj1VPfOVDO03dQqsubuFhcAW09J_KmGUwYjqJ-V99n3rl4pATBUb_gLcp1UfDTSzK2BJZzTU8AN_5&source=gbs_api",
      large:
        //   615w
        "http://books.google.com/books/publisher/content?id=ZWRQEAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70Z0YfHIbzQSUQ4bayg4JqL56liW5qmZ22V4yjTR_s0g48ZlkIJb5AzAeJL4qPsr9LXkE2EClwm3xsA2cFTw3CrSTiNZoSV0DqXtSiCV-7GLzSfRJVK1_5NZ_UTp7FEJARhGoOx&source=gbs_api",
      extraLarge:
        //   615w
        "http://books.google.com/books/publisher/content?id=ZWRQEAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72ZmtD3BrFUUb2-3QfUTND90KnTVcVi5-Ov2Yq46PiccT0PxWNYzTflWTStjCuqRpRstS5sQIVqh_ejdbuAa2_tf15pOMNNkKNe6jWu4cPZlFb0oFPp1IseDqf3BhilMXwvS16p&source=gbs_api",
    },
    language: "en",
    previewLink:
      "http://books.google.com/books?id=ZWRQEAAAQBAJ&hl=&source=gbs_api",
    infoLink:
      "https://play.google.com/store/books/details?id=ZWRQEAAAQBAJ&source=gbs_api",
    canonicalVolumeLink:
      "https://play.google.com/store/books/details?id=ZWRQEAAAQBAJ",
  },
  layerInfo: {
    layers: [
      {
        layerId: "geo",
        volumeAnnotationsVersion: "5",
      },
    ],
  },
  saleInfo: {
    country: "US",
    saleability: "FOR_SALE",
    isEbook: true,
    listPrice: {
      amount: 14.99,
      currencyCode: "USD",
    },
    retailPrice: {
      amount: 14.99,
      currencyCode: "USD",
    },
    buyLink:
      "https://play.google.com/store/books/details?id=ZWRQEAAAQBAJ&rdid=book-ZWRQEAAAQBAJ&rdot=1&source=gbs_api",
    offers: [
      {
        finskyOfferType: 1,
        listPrice: {
          amountInMicros: 14990000,
          currencyCode: "USD",
        },
        retailPrice: {
          amountInMicros: 14990000,
          currencyCode: "USD",
        },
        giftable: true,
      },
    ],
  },
  accessInfo: {
    country: "US",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: true,
      acsTokenLink:
        "http://books.google.com/books/download/Babel-sample-epub.acsm?id=ZWRQEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      "http://play.google.com/books/reader?id=ZWRQEAAAQBAJ&hl=&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false,
  },
};
type GoogleBookAPIResponse = typeof bookEntry;
const googleBookAPIGenerator = (id: string) => {
  return `https://www.googleapis.com/books/v1/volumes/${id}`;
};
interface BookData {
  title: string;
  subtitle: string;
  authors: string[];
  averageRating: number;
  ratingsCount: number;
  description: string;
  categories: string[];
  pageCount: number;
  image: {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  publishedDate: string;
}
const useFetchBook = () => {
  const { id } = useParams();
  const { status, data, error, loading } = useFetch<GoogleBookAPIResponse>(
    googleBookAPIGenerator(id ? id : "")
  );
  const [bookData, setBookData] = useState<BookData | undefined>(undefined);
  console.log(id, { status, data, error, loading });
  useEffect(() => {
    if (!id) {
      return;
    }
    if (data !== undefined) {
      const {
        title,
        subtitle,
        authors,
        averageRating,
        ratingsCount,
        description,
        categories,
        pageCount,
        imageLinks,
        publishedDate,
      } = data.volumeInfo;
      setBookData({
        title,
        subtitle,
        authors,
        averageRating,
        ratingsCount,
        description,
        categories,
        pageCount,
        image: imageLinks,
        publishedDate,
      });
    }
  }, [status]);
  return bookData;
};
interface ApiResponse<T> {
  status: number;
  data: undefined | T;
  error: undefined | Error;
  loading: boolean;
}
interface ApiResponse200<T> extends ApiResponse<T> {
  status: 200;
  data: T;
  error: undefined;
}
export const NetworkError = 999;
export function useFetch<T>(url: string): ApiResponse<T> | ApiResponse200<T> {
  const [status, setStatus] = useState<number>(0);
  const [data, setData] = useState<undefined | T>(undefined);
  const [error, setError] = useState<undefined | Error>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  async function getAPIData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (response.ok) {
        if (response.status === 200) {
          setStatus(response.status);
          const json200: T = json;
          setData(json200);
        } else {
          setData(json);
        }
      } else {
        const tempError = new Error(
          json.error.errors
            ?.map((e: { message: string }) => e.message)
            .join("\n") ?? "unknown"
        );
        setError(tempError);
      }
      setLoading(false);
    } catch {
      if (error === undefined) {
        // Network error
        setStatus(NetworkError);
      }
      console.log(error);
    }
  }

  useEffect(() => {
    getAPIData();
  }, []);
  if (status === 200) {
    return { status, data, error, loading } as ApiResponse200<T>;
  }
  return { status, data, error, loading };
}

export default useFetchBook;
