import React from 'react';
import { LuFile } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Article } from '../../../models/datamodels';
import BlogPost from '../../Blog/components/BlogPost';
import { useTranslation } from 'react-i18next';

interface ProfileArticlesProps {
  authorId?: string;
  posts?: Article[]; // Optional prop for pre-fetched posts
}

const ProfilePosts: React.FC<ProfileArticlesProps> = ({ posts = [] }) => {
  // If posts are not provided, this component assumes the parent handles loading/error states
  const hasPosts = posts && posts.length > 0;

  const {t} = useTranslation();

  return (
    <div>
      {hasPosts ? (
        <div className="w-full flex flex-col items-center">
          {posts.map((post: Article) => (
            <BlogPost key={post._id} article={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 flex flex-col items-center gap-4">
          <LuFile className="text-4xl" />
          <p className="flex gap-2">
            {t("profile.noPosts")}
            <Link to="/posts/create" className="text-primary-400">
              {t("profile.createOne")}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePosts;
