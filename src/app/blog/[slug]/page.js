"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React, { useEffect } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { slugify } from "@/app/utils/helpers";
import { usePathname } from "next/navigation";
import Comments from "@/components/blog/Comments";

async function getPost(slug) {
  const query = `
    *[_type=="blog" && slug.current=="${slug}"]{
  
    title,
    slug,
    description,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    category,
    content,
    author,
    date,
    tags,
  } 
  `;

  const response = await client.fetch(query);
  return response[0];
}

const BlogPage = () => {
  useWow();
  const [post, setPost] = React.useState(null);
  const pathName = usePathname();
  const slug = pathName.split("/")[2];

  useEffect(() => {
    getPost(slug).then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <MainLayout>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>{"Blog Details"}</li>
                  </ul>
                  <h1>{post?.title}</h1>
                </div>
                <div className="scroll-down-btn">
                  <a href={"#blog-details"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={29}
                      viewBox="0 0 19 29"
                    >
                      <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="blog-details scroll-margin pt-120 mb-120 style-6"
        id="blog-details"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-details-thumb">
                <div className="batch">
                  <span>{post?.category}</span>
                </div>
                <img
                  src={
                    post
                      ? urlForImage(post?.mainImage).url()
                      : "/assets/img/innerpage/blog-details-thumb-img.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="blog-details-author-meta">
                <div className="author-area">
                  <div className="author-content">
                    <h6>
                      By,{" "}
                      <Link className="text-capitalize" href="/#">
                        {post?.author}
                      </Link>
                    </h6>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                    </svg>
                    {new Date(post?.date).toDateString()}
                  </li>
                  <li>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                    </svg>
                    3.9K View
                  </li>
                  <li>
                    <a href="#comment-area">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5662 14.9619C14.5908 15.0728 14.5903 15.1878 14.5648 15.2986C14.5393 15.4093 14.4895 15.513 14.419 15.6021C14.3484 15.6912 14.2589 15.7635 14.157 15.8136C14.055 15.8638 13.9432 15.8906 13.8295 15.8922C13.7123 15.8916 13.5967 15.8643 13.4916 15.8124L12.1473 15.1555C10.8911 15.6143 9.51546 15.6277 8.25052 15.1936C6.98557 14.7595 5.90806 13.9042 5.19824 12.7708C6.14928 12.8941 7.11563 12.8159 8.03447 12.5413C8.95331 12.2667 9.80408 11.8018 10.5315 11.1768C11.2589 10.5518 11.8466 9.78079 12.2565 8.91379C12.6664 8.0468 12.8892 7.10326 12.9106 6.14449C12.911 5.70944 12.8664 5.27551 12.7777 4.84961C13.6869 5.29062 14.4601 5.96909 15.0156 6.81329C15.571 7.65749 15.8881 8.63608 15.9332 9.64561C15.9633 10.4111 15.8336 11.1744 15.5525 11.887C15.2714 12.5996 14.845 13.2459 14.3004 13.7847L14.5662 14.9619Z"></path>
                        <path d="M6.0757 0.216195C4.48484 0.198449 2.95187 0.812289 1.81293 1.92312C0.673981 3.03395 0.0220199 4.5511 1.29169e-06 6.1419C-0.000538167 6.94954 0.167902 7.74837 0.494497 8.48703C0.821091 9.22569 1.29861 9.88786 1.89638 10.431L1.65183 11.7365C1.63148 11.8461 1.63545 11.9588 1.66346 12.0668C1.69147 12.1747 1.74285 12.2751 1.81395 12.361C1.88505 12.4469 1.97414 12.5161 2.07493 12.5638C2.17572 12.6114 2.28575 12.6364 2.39724 12.6368C2.52333 12.6366 2.64739 12.6052 2.75837 12.5453L4.19679 11.7726C4.8041 11.9674 5.43791 12.067 6.0757 12.068C7.66662 12.0857 9.19965 11.4718 10.3386 10.3609C11.4776 9.25002 12.1295 7.73277 12.1514 6.1419C12.1294 4.5511 11.4774 3.03395 10.3385 1.92312C9.19953 0.812289 7.66656 0.198449 6.0757 0.216195ZM3.79731 7.05136C3.64711 7.05136 3.50027 7.00681 3.37538 6.92336C3.25049 6.83991 3.15314 6.7213 3.09566 6.58253C3.03818 6.44375 3.02314 6.29105 3.05244 6.14373C3.08175 5.99641 3.15408 5.86109 3.26029 5.75487C3.36651 5.64866 3.50183 5.57633 3.64915 5.54702C3.79647 5.51772 3.94917 5.53276 4.08795 5.59024C4.22672 5.64772 4.34533 5.74507 4.42878 5.86996C4.51223 5.99485 4.55678 6.14169 4.55678 6.29189C4.55678 6.49332 4.47676 6.68649 4.33433 6.82891C4.19191 6.97134 3.99874 7.05136 3.79731 7.05136ZM6.0757 7.05136C5.92549 7.05136 5.77866 7.00681 5.65377 6.92336C5.52887 6.83991 5.43153 6.7213 5.37405 6.58253C5.31657 6.44375 5.30153 6.29105 5.33083 6.14373C5.36013 5.99641 5.43247 5.86109 5.53868 5.75487C5.64489 5.64866 5.78022 5.57633 5.92754 5.54702C6.07486 5.51772 6.22756 5.53276 6.36633 5.59024C6.50511 5.64772 6.62372 5.74507 6.70717 5.86996C6.79062 5.99485 6.83516 6.14169 6.83516 6.29189C6.83516 6.49332 6.75515 6.68649 6.61272 6.82891C6.47029 6.97134 6.27712 7.05136 6.0757 7.05136ZM8.35409 7.05136C8.20388 7.05136 8.05704 7.00681 7.93215 6.92336C7.80726 6.83991 7.70992 6.7213 7.65244 6.58253C7.59495 6.44375 7.57991 6.29105 7.60922 6.14373C7.63852 5.99641 7.71085 5.86109 7.81707 5.75487C7.92328 5.64866 8.0586 5.57633 8.20592 5.54702C8.35324 5.51772 8.50595 5.53276 8.64472 5.59024C8.78349 5.64772 8.90211 5.74507 8.98556 5.86996C9.06901 5.99485 9.11355 6.14169 9.11355 6.29189C9.11355 6.49332 9.03354 6.68649 8.89111 6.82891C8.74868 6.97134 8.55551 7.05136 8.35409 7.05136Z"></path>
                      </svg>
                      840 Comment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row g-lg-4 gy-5 mb-100">
            <div className="col-lg-8">
              <div className="blog-details-content mb-0">
                <p className="first-para mb-20">{post?.description}</p>
                <div className={richTextStyles}>
                  <PortableText
                    value={post?.content}
                    components={myPortableTextComponents}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                {/* <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Category</h5>
                  <ul className="category-list">
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Digital Marketing
                        </span>
                        <span>(20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Creative Agency
                        </span>
                        <span>(15)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Web Design
                        </span>
                        <span>(25)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Web Development
                        </span>
                        <span>(30)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          Content Marketing
                        </span>
                        <span>(32)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          App Development
                        </span>
                        <span>(35)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          UI/UX Design
                        </span>
                        <span>(38)</span>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Popular Post </h5>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">20 February, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Looking Inspiration Traveling The World.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">12 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Challenges creating a multi-brand system.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img3.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">04 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Decoding the Cloud And Deep Dive Creative.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Releted Tags</h5>
                  <ul className="tag-list">
                    {post?.tags?.map((tag) => (
                      <li>
                        <Link href={""} onClick={(e) => e.preventDefault()}>
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="single-widget">
                  <h5 className="widget-title">Social Share</h5>
                  <ul className="social-list">
                    <li>
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/blog/${slug}`}
                      >
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u="
                        target="_blank"
                      >
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=Here is a great blog by @MetaGeeks_tech . \n ${post?.title}&url=/case-study/${slug}`}
                      >
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-tag-and-social-area">
            <div className="blog-tag">
              <h6>Tag:</h6>
              <ul>
                {post?.tags?.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <Comments
                url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`}
                identifier={slug}
                title={post?.title || ""}
              />
              {/* <div className="comment-area" id="comment-area">
                <div className="comment-title">
                  <h4>Comments (03)</h4>
                  <div className="dash" />
                </div>
                <ul className="comment">
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="/assets/img/innerpage/comment-author-01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Mr. Bowmik Haldar,</h6>
                          <span>05 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply (02)
                        </div>
                      </div>
                    </div>
                    <ul className="comment-replay">
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/innerpage/comment-author-02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Jacoline Juie,</h6>
                              <span>05 January, 2024</span>
                            </div>
                            <p>
                              However, here are some well-regarded car
                              dealerships known for their customer service,
                              inventory, and overall reputation. It's always a
                              good idea to research and read reviews specific...
                            </p>
                            <div className="replay-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                              >
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img
                              src="/assets/img/innerpage/comment-author-03.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Robert Smith,</h6>
                              <span>05 January, 2024</span>
                            </div>
                            <p>
                              However, here are some well-regarded car
                              dealerships known for their customer service,
                              inventory, and overall reputation. It's always a
                              good idea to research and read reviews specific...
                            </p>
                            <div className="replay-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                              >
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="/assets/img/innerpage/comment-author-04.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Srileka Panday,</h6>
                          <span>08 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply (02)
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="/assets/img/innerpage/comment-author-05.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Mr. Bowmik Haldar,</h6>
                          <span>23 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply (02)
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="inquiry-form mt-100">
                  <div className="title">
                    <h4>Leave Your Comment:</h4>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Your Name* :</label>
                          <input type="text" placeholder="Jackson Mile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Your Email* :</label>
                          <input type="email" placeholder="example@gamil.com" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-50">
                          <label>Your Comments*</label>
                          <textarea
                            placeholder="Write Something..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-inner">
                      <button
                        className="primary-btn1"
                        data-text="Post Comment"
                        type="submit"
                      >
                        <span>Post Comment</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;

export const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
  block: {
    h2: ({ value }) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

export const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
