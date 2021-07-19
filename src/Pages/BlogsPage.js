import styled from "styled-components";
import blogs from "../data/blogs";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Znane"} span={"znane"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <p>{blog.date}</p>
                <p>{blog.month}</p>
                <div className="image">
                  <img src={blog.image} alt="..." />
                </div>
                <div className="title">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-column-gap: 2rem; */
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: 1fr;
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    .image {
      width: 100%;
      max-height: 500px;
      padding-bottom: 0.5rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        transition: all 0.4s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: scale(1.2) rotate(3deg);
        }
      }
    }
    .title {
      margin: 1rem 0;
      a {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
