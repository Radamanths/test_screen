interface HeaderProps {
  onClose?: () => void;
}

/* Neural network icon — exact filled path from Figma SVG, 15×14.76 */
function NeuralNetIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="12 10 15 14.7627"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M24.722 10C25.98 10.0002 27 11.0201 27 12.2783C27 13.5366 25.98 14.5565 24.722 14.5566C24.368 14.5566 24.034 14.473 23.735 14.3291L21.398 16.6221L23.721 18.9199C24.023 18.7717 24.362 18.6865 24.722 18.6865C25.98 18.6867 27 19.7067 27 20.9648C27 22.2231 25.98 23.243 24.722 23.2432C24.363 23.2431 24.024 23.1577 23.722 23.0098L23.701 23.0303H16.488C16.243 24.0245 15.348 24.7627 14.278 24.7627C13.02 24.7626 12 23.7425 12 22.4844C12 21.2261 13.02 20.2061 14.278 20.2061C15.288 20.2061 16.142 20.8629 16.441 21.7725H22.593C22.497 21.5213 22.443 21.2495 22.443 20.9648C22.443 20.5056 22.58 20.0785 22.813 19.7207L20.378 17.2148V17.2393H18.669C18.384 17.239 18.218 16.9384 18.171 16.7881V12.9189H16.488C16.244 13.9135 15.348 14.6514 14.278 14.6514C13.02 14.6513 12 13.6314 12 12.373C12 11.1149 13.02 10.0948 14.278 10.0947C15.297 10.0947 16.158 10.763 16.45 11.6846C17.081 11.6768 18.287 11.6674 18.669 11.6855C19.067 11.7045 19.309 11.9932 19.381 12.1357V15.9336H20.354L22.787 13.4775C22.571 13.1289 22.443 12.719 22.443 12.2783C22.443 11.0201 23.463 10.0001 24.722 10ZM14.278 21.4873C13.728 21.4874 13.281 21.934 13.281 22.4844C13.281 23.0347 13.728 23.4814 14.278 23.4814C14.829 23.4814 15.275 23.0348 15.275 22.4844C15.275 21.9339 14.829 21.4873 14.278 21.4873ZM24.722 19.9678C24.171 19.9679 23.725 20.4145 23.725 20.9648C23.725 21.5153 24.171 21.9618 24.722 21.9619C25.272 21.9617 25.719 21.5153 25.719 20.9648C25.719 20.4146 25.272 19.9679 24.722 19.9678ZM14.278 11.376C13.728 11.3761 13.281 11.8227 13.281 12.373C13.281 12.9235 13.728 13.37 14.278 13.3701C14.829 13.3701 15.275 12.9236 15.275 12.373C15.275 11.8227 14.829 11.376 14.278 11.376ZM24.722 11.2812C24.171 11.2813 23.725 11.7279 23.725 12.2783C23.725 12.8288 24.171 13.2753 24.722 13.2754C25.272 13.2752 25.719 12.8288 25.719 12.2783C25.719 11.728 25.272 11.2814 24.722 11.2812Z"
        fill="white"
      />
    </svg>
  );
}

export function Header({ onClose }: HeaderProps) {
  return (
    // Frame 18: width 362px centered, align-items: flex-start, top: 62px
    <div
      className="flex justify-between"
      style={{
        width: '362px',
        height: '34.76px',
        marginTop: '8px',
        marginLeft: '14px',
        marginRight: '14px',
        alignItems: 'flex-start',
        padding: 0,
      }}
    >
      {/* Frame 1 — Close pill: 80×30, padding 10px 12px, gap 10px */}
      <button
        onClick={onClose}
        className="flex items-center justify-center gap-[10px] border-none cursor-pointer"
        style={{
          width: '80px',
          height: '30px',
          padding: '0px 12px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(15.5px)',
          borderRadius: '102.585px',
        }}
      >
        {/* Close X: exact Figma path, 4 arms from center, stroke-width 2 */}
        <svg width="9" height="9" viewBox="11 9.5 11 11" fill="none" style={{ flexShrink: 0 }}>
          <path d="M16.3043 15.1957L21 10.5M16.3043 15.1957L12 10.5M16.3043 15.1957L12 19.5M16.3043 15.1957L21 19.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span
          style={{
            fontFamily: "'SF Pro', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '13.6364px',
            lineHeight: '1',
            letterSpacing: '-0.545455px',
            color: '#FFFFFF',
          }}
        >
          Close
        </span>
      </button>

      {/* Frame 3 — НЕЙРОСЕТКА pill: 137×34.76 */}
      <button
        className="flex items-center justify-center gap-[4px] border-none cursor-pointer"
        style={{
          width: '137px',
          height: '34.76px',
          padding: '0px 12px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(15.5px)',
          borderRadius: '102.585px',
        }}
      >
        <NeuralNetIcon />
        <span
          style={{
            fontFamily: "'SF Pro', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '13.6364px',
            lineHeight: '1',
            letterSpacing: '-0.545455px',
            color: '#FFFFFF',
          }}
        >
          НЕЙРОСЕТКА
        </span>
      </button>

      {/* Frame 2 — Right pill: 73×30, chevron + 3 dots */}
      <div
        className="relative"
        style={{
          width: '73px',
          height: '30px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(15.5px)',
          borderRadius: '102.585px',
        }}
      >
        {/* Exact Figma SVG contents: filled chevron + 3 circles */}
        <svg
          width="73"
          height="30"
          viewBox="0 0 73 30"
          fill="none"
          style={{ position: 'absolute', left: 0, top: 0 }}
        >
          <path
            d="M16.293 19.784C16.683 20.1746 17.317 20.1746 17.707 19.784L24.071 13.4201C24.462 13.0296 24.462 12.3964 24.071 12.0059C23.681 11.6153 23.047 11.6153 22.657 12.0059L17 17.6627L11.343 12.0059C10.953 11.6153 10.319 11.6153 9.929 12.0059C9.538 12.3964 9.538 13.0296 9.929 13.4201L16.293 19.784ZM17 19.0769H18V19H17H16V19.0769H17Z"
            fill="white"
          />
          <circle cx="48" cy="15" r="1.5" fill="white" stroke="white" />
          <circle cx="54" cy="15" r="1.5" fill="white" stroke="white" />
          <circle cx="60" cy="15" r="1.5" fill="white" stroke="white" />
        </svg>
      </div>
    </div>
  );
}
