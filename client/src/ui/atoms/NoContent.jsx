
import { MessageCard } from "../templates/MessageCard";
import no_content from '../../assets/no_content.png';

export const NoContent = () => {

  return (
    <MessageCard
      message="Brak danych do wyświetlenia"
      image={no_content}
    />
  );
};
