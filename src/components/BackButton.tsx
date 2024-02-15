import { useRouter } from "next/navigation";
import { css } from "../../styled-system/css";

const buttonStyles = css({
  fontWeight: "bold",
  fontSize: "md",
  rounded: "md",
  py: "1",
  px: "2",
  mb: 4,
  cursor: "pointer",
  _hover: {
    bg: "gray.200",
    transition: "0.3s",
  },
});

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleBack} className={buttonStyles}>
      ← Back
    </button>
  );
};

export default BackButton;
