"use client";
import IMAGES from "../../assets/images/index";
import React from "react";
import { FaCopy } from "react-icons/fa6";
import { StaticImageData } from "next/image";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { GoUnlink } from "react-icons/go";

interface LinkData {
  id: number;
  shortLink: string;
  originalLink: string;
  qrCode: any;
  images: string | StaticImageData;
  clicks: number;
  status: "Active" | "Inactive";
  date: string;
  actions: string[];
}

interface TableComponentProps {
  data: LinkData[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  const headers = [
    "Short Link",
    "Original Link",
    "QR Code",
    "Clicks",
    "Status",
    "Date",
    "Action",
  ];

  return (
    <div className="w-full max-w-full overflow-x-auto lg:max-w-[85%] lg:mx-auto">
      <table className="min-w-full bg-[#0F131A] text-[#C9CED6]">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-3 px-4 text-left text-[15px]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-800 bg-[#181E2938] ">
              <td className="py-6 px-4 flex items-center gap-3 text-[#C9CED6]">
                {row.shortLink}
                <div className="cursor-pointer bg-[#1C283FB0] w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <FaCopy />
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={
                        typeof row.images === "string"
                          ? row.images
                          : row.images.src
                      }
                      alt="Link Icon"
                      className="rounded w-[32px] h-[32px]"
                    />
                  </div>
                  <a
                    href={row.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9CED6] hover:text-blue-300"
                  >
                    {row.originalLink}
                  </a>
                </div>
              </td>
              <td className="py-3 px-4">
                <img
                  src={IMAGES.qrImg.src}
                  alt="QR Code"
                  className="w-[36px] h-[36px]"
                />
              </td>
              <td className="py-3 px-4 text-[#C9CED6]">{row.clicks}</td>
              <td className="py-3 px-4">
                <span
                  className={`rounded-full text-sm flex items-center gap-2 text-[14px] ${
                    row.status === "Active"
                      ? "text-[#1EB036]"
                      : "text-[#B0901E]"
                  }`}
                >
                  {row.status === "Active" ? (
                    <>
                      {row.status}
                      <div className="bg-[#1EB03624] w-[35px] h-[35px] flex items-center justify-center rounded-full">
                        <IoIosLink className="text-[#1EB036] w-[19px] h-[28px]" />
                      </div>
                    </>
                  ) : (
                    <>
                      {row.status}
                      <div className="bg-[#B0901E30] w-[35px] h-[35px] flex items-center justify-center rounded-full">
                        <GoUnlink className="text-[#B0901E] w-[19px] h-[28px]" />
                      </div>
                    </>
                  )}
                </span>
              </td>
              <td className="py-3 px-4">{row.date}</td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button className="text-[#C9CED6] hover:text-blue-300 w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#353C4A]">
                    <GrEdit />
                  </button>
                  <button className="text-[#C9CED6] hover:text-red-300 w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[#353C4A]">
                    <MdDeleteOutline />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
