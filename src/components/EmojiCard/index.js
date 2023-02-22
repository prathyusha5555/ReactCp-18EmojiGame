import './index.css'

const EmojiCard = props => {
  const {clickEmoji, emojiDetails} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button">
        <img
          src={emojiUrl}
          className="emoji-icon"
          alt={emojiName}
          onClick={onClickEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
