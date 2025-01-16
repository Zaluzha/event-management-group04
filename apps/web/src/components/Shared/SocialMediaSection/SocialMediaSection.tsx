import React from 'react';
import { blackSocialMediaList, socialMediaList } from '@/constants/Resource';
import { ThemeType } from '@/type/Common';

interface SocialMediaSectionProps {
  type?: string;
  navbar?: boolean;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = props => {
  const { type, navbar } = props;
  const data = navbar ? socialMediaList : type === ThemeType.DARK ? blackSocialMediaList : socialMediaList;
  return (
    <div className="flex items-center cursor-pointer gap-5">
      {data.map(social => (
        <a href={social.link || '#'} target="_blank" key={social.name}>
          <img src={social.image} alt={`${social.name}-logo`} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaSection;
