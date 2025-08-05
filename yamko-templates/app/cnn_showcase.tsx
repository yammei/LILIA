'use client';

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
import testMriGlioma from '@/images/test_mri_glioma.jpg';
import testMriMeningioma from '@/images/test_mri_meningioma.jpg';
import testMriNoTumor from '@/images/test_mri_notumor.jpg';
import testMriPituitary from '@/images/test_mri_pituitary.jpg';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

interface ClassificationResponse {
  prediction: string;
  class_probabilities: {
    glioma: number;
    meningioma: number;
    notumor: number;
    pituitary: number;
  };
}

interface ImageBoxProps {
  isActive: boolean;
  bgImage: string;
}

const imageSources = [testMriGlioma, testMriMeningioma, testMriNoTumor, testMriPituitary];
const labels = ["glioma", "meningioma", "notumor", "pituitary"];

const ImageBox = styled.div<ImageBoxProps>`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ isActive }) => (isActive ? "#3b82f6" : "#ccc")};
  border-radius: 8px;
  cursor: pointer;
  background-color: #f3f4f6;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.25s ease-in-out, filter 0.25s ease-in-out, border 0.2s ease;
  outline: none;

  &:hover {
    transform: scale(1.025);
    filter: brightness(1.25);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 25px auto;
  gap: 16px;
  width: 100%;
  // background-color: red;
  padding-right: 50px;
`;

const ImagesRow = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  gap: 16px;
  width: 100%;
`;

const BrainTumorClassifier: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [percentages, setPercentages] = useState<number[]>([0, 0, 0, 0]);

  const handleClick = async (index: number) => {
    setActiveIndex(index);

    try {
      const local_endpoint = `${API_BASE}/api/brain_tumor_classification`;
      const response = await axios.post<ClassificationResponse>(local_endpoint, {
        image_id: index + 1
      });

      const data = response.data;
      const values = [
        data.class_probabilities.glioma,
        data.class_probabilities.meningioma,
        data.class_probabilities.notumor,
        data.class_probabilities.pituitary,
      ];
      setPercentages(values);
    } catch (error) {
      console.error("Error fetching classification:", error);
    }
  };

  const chartData = labels.map((label, idx) => ({
    name: label,
    value: percentages[idx] * 100,
  }));

  return (
    <Container>
      {/* Bar Chart */}
      <div style={{ width: "400px", height: "220px", margin: "auto", backgroundColor: ""}}>
        <ResponsiveContainer>
          <BarChart 
            style={{ outline: "none" }}
            tabIndex={-1}
            data={chartData}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
            />
            {/* <Tooltip /> */}
            <Bar dataKey="value" fill="rgba(0, 154, 237, 1)">
              {/* Add percentage labels below each bar */}
              <LabelList
                dataKey="value"
                position="insideBottom"
                formatter={(label: React.ReactNode) => {
                  if (typeof label === "number") {
                    return `${label.toFixed(1)}%`;
                  }
                  return label;
                }}
                style={{
                  fontSize: 12,
                  fill: "rgb(200, 200, 200)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.75)"
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Image Boxes */}
      <ImagesRow>
        {imageSources.map((src, index) => (
          <ImageBox
            key={index}
            bgImage={src.src}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </ImagesRow>
    </Container>
  );
};

export default BrainTumorClassifier;
