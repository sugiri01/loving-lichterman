import React, { useState } from "react";

// Define TypeScript interfaces for our data structures
interface Keyword {
  keyword: string;
  searchVolume: number;
  competition: "Low" | "Medium" | "High";
  bidRange: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

interface KeywordCategories {
  [key: string]: Keyword[];
}

const KeywordRecommendations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Top keywords organized by categories
  const keywordCategories: KeywordCategories = {
    all: [
      {
        keyword: "python programming",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$8.10 - $34.73",
      },
      {
        keyword: "python and programming",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$8.10 - $34.73",
      },
      {
        keyword: "learning about machine learning",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$25.18 - $92.04",
      },
      {
        keyword: "python language tutorial",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$10.42 - $78.14",
      },
      {
        keyword: "introduction to ai",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$1.74 - $59.91",
      },
      {
        keyword: "introduction to artificial intelligence",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$1.74 - $59.91",
      },
      {
        keyword: "artificial intelligence and education",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$2.40 - $54.54",
      },
      {
        keyword: "python online",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$0.48 - $30.58",
      },
      {
        keyword: "python language",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$3.57 - $29.87",
      },
      {
        keyword: "python basics",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$7.81 - $45.77",
      },
      {
        keyword: "basics of python programming",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$7.81 - $45.77",
      },
      {
        keyword: "in python class",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$0.87 - $161.19",
      },
      {
        keyword: "python use class",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$0.87 - $161.19",
      },
      {
        keyword: "basics of python language",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$7.81 - $45.77",
      },
      {
        keyword: "coding for python",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$7.81 - $72.07",
      },
    ],
    ai: [
      {
        keyword: "introduction to ai",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$1.74 - $59.91",
      },
      {
        keyword: "introduction to artificial intelligence",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$1.74 - $59.91",
      },
      {
        keyword: "artificial intelligence and education",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$2.40 - $54.54",
      },
      {
        keyword: "online artificial intelligence",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$2.41 - $61.65",
      },
      {
        keyword: "computer science artificial intelligence",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$19.97 - $61.92",
      },
      {
        keyword: "ai programming",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$6.66 - $122.43",
      },
      {
        keyword: "artificial intelligence and machine learning",
        searchVolume: 50000,
        competition: "Medium",
        bidRange: "$32.48 - $113.08",
      },
      {
        keyword: "ai courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$45.15 - $140.64",
      },
      {
        keyword: "artificial intelligence classes",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$41.19 - $151.10",
      },
      {
        keyword: "machine learning and artificial intelligence courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$55.21 - $202.66",
      },
    ],
    ml: [
      {
        keyword: "learning about machine learning",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$25.18 - $92.04",
      },
      {
        keyword: "introduction to machine learning",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$13.29 - $80.78",
      },
      {
        keyword: "machine learning using python",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$23.11 - $78.24",
      },
      {
        keyword: "python machine learning",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$23.11 - $78.24",
      },
      {
        keyword: "machine learning and python",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$23.11 - $78.24",
      },
      {
        keyword: "learn machine learning with python",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$23.11 - $78.24",
      },
      {
        keyword: "introduction to machine learning with python",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$23.55 - $83.69",
      },
      {
        keyword: "machine learning courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$37.45 - $124.35",
      },
      {
        keyword: "machine learning classes",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$37.45 - $124.35",
      },
      {
        keyword: "course of machine learning",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$37.45 - $124.35",
      },
    ],
    dataAnalytics: [
      {
        keyword: "data analytics",
        searchVolume: 50000,
        competition: "Medium",
        bidRange: "$32.38 - $88.15",
      },
      {
        keyword: "python for data analysis",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$23.00 - $86.83",
      },
      {
        keyword: "data analytics using python",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$23.07 - $88.49",
      },
      {
        keyword: "using python for data analysis",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$23.07 - $88.49",
      },
      {
        keyword: "python data analytics",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$27.78 - $91.16",
      },
      {
        keyword: "introduction to data analysis",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$18.59 - $86.83",
      },
      {
        keyword: "introduction to data analytics",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$25.79 - $86.83",
      },
      {
        keyword: "data analytics courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$47.88 - $131.94",
      },
      {
        keyword: "data analytics classes",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$47.88 - $131.94",
      },
      {
        keyword: "data and analytics courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$47.88 - $131.94",
      },
    ],
    python: [
      {
        keyword: "python programming",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$8.10 - $34.73",
      },
      {
        keyword: "python and programming",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$8.10 - $34.73",
      },
      {
        keyword: "python language tutorial",
        searchVolume: 500000,
        competition: "Low",
        bidRange: "$10.42 - $78.14",
      },
      {
        keyword: "python online",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$0.48 - $30.58",
      },
      {
        keyword: "python language",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$3.57 - $29.87",
      },
      {
        keyword: "python basics",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$7.81 - $45.77",
      },
      {
        keyword: "basics of python programming",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$7.81 - $45.77",
      },
      {
        keyword: "in python class",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$0.87 - $161.19",
      },
      {
        keyword: "python use class",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$0.87 - $161.19",
      },
      {
        keyword: "python courses",
        searchVolume: 50000,
        competition: "Medium",
        bidRange: "$15.09 - $62.37",
      },
    ],
    sql: [
      {
        keyword: "sql courses",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$17.21 - $71.49",
      },
      {
        keyword: "learn sql",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$13.04 - $51.26",
      },
      {
        keyword: "learn sql programming",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$13.04 - $51.26",
      },
      {
        keyword: "sql full course",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$9.55 - $38.20",
      },
      {
        keyword: "mssql full course",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$9.55 - $38.20",
      },
      {
        keyword: "advanced sql",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$7.81 - $52.96",
      },
      {
        keyword: "advanced sql queries",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$0.50 - $40.81",
      },
      {
        keyword: "sql basics for beginners",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$1.74 - $25.18",
      },
      {
        keyword: "sql intermediate",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$0 - $0",
      },
      {
        keyword: "sql basic programming",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$2.60 - $173.66",
      },
    ],
    beginner: [
      {
        keyword: "python for beginners",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$11.29 - $53.13",
      },
      {
        keyword: "python programming for beginners",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$11.29 - $53.13",
      },
      {
        keyword: "python tutorial for beginners",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$11.95 - $81.62",
      },
      {
        keyword: "python coding for beginners",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$7.81 - $86.83",
      },
      {
        keyword: "python basic programs for beginners",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$15.20 - $93.45",
      },
      {
        keyword: "python basics for beginners",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$6.15 - $73.80",
      },
      {
        keyword: "introduction to data analytics",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$25.79 - $86.83",
      },
      {
        keyword: "introduction to data analysis",
        searchVolume: 500,
        competition: "Low",
        bidRange: "$18.59 - $86.83",
      },
      {
        keyword: "introduction to ai",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$1.74 - $59.91",
      },
      {
        keyword: "introduction to artificial intelligence",
        searchVolume: 50000,
        competition: "Low",
        bidRange: "$1.74 - $59.91",
      },
    ],
    courses: [
      {
        keyword: "python courses",
        searchVolume: 50000,
        competition: "Medium",
        bidRange: "$15.09 - $62.37",
      },
      {
        keyword: "machine learning courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$37.45 - $124.35",
      },
      {
        keyword: "data analytics courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$47.88 - $131.94",
      },
      {
        keyword: "ai courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$45.15 - $140.64",
      },
      {
        keyword: "sql courses",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$17.21 - $71.49",
      },
      {
        keyword: "python classes",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$19.19 - $80.75",
      },
      {
        keyword: "python training",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$27.11 - $95.02",
      },
      {
        keyword: "online ai courses",
        searchVolume: 50000,
        competition: "High",
        bidRange: "$67.65 - $198.08",
      },
      {
        keyword: "python course near me",
        searchVolume: 5000,
        competition: "Low",
        bidRange: "$21.42 - $71.83",
      },
      {
        keyword: "best python course",
        searchVolume: 5000,
        competition: "Medium",
        bidRange: "$19.97 - $80.26",
      },
    ],
  };

  // Category information for the tabs
  const categories: Category[] = [
    { id: "all", name: "All Keywords", count: keywordCategories.all.length },
    { id: "ai", name: "AI", count: keywordCategories.ai.length },
    { id: "ml", name: "Machine Learning", count: keywordCategories.ml.length },
    {
      id: "dataAnalytics",
      name: "Data Analytics",
      count: keywordCategories.dataAnalytics.length,
    },
    { id: "python", name: "Python", count: keywordCategories.python.length },
    { id: "sql", name: "SQL", count: keywordCategories.sql.length },
    {
      id: "beginner",
      name: "Beginner-Focused",
      count: keywordCategories.beginner.length,
    },
    {
      id: "courses",
      name: "Courses & Certifications",
      count: keywordCategories.courses.length,
    },
  ];

  // Format large numbers
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Get competition color
  const getCompetitionColor = (competition: string): string => {
    switch (competition) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          EdAthena Recommended Keywords
        </h1>
        <p className="text-gray-600">
          These keywords are optimized for EdAthena's focus areas: AI, Machine
          Learning, Data Analytics, Python, and SQL courses. The recommendations
          balance search volume, competition level, and cost efficiency.
        </p>
      </div>

      {/* Category tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 font-medium text-sm mr-2 rounded-t-lg transition whitespace-nowrap ${
                activeTab === category.id
                  ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Keywords table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Keyword
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Monthly Searches
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Competition
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Bid Range
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {keywordCategories[activeTab].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.keyword}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatNumber(item.searchVolume)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getCompetitionColor(
                      item.competition
                    )}`}
                  >
                    {item.competition}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.bidRange}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">
          Keyword Strategy Recommendations
        </h3>
        <ul className="list-disc pl-5 text-blue-700 space-y-1">
          <li>
            Focus on low competition keywords with high search volume like
            "python programming" and "introduction to ai"
          </li>
          <li>
            Target beginners with keywords containing "introduction", "basics",
            and "beginners"
          </li>
          <li>
            Use Python-related keywords to drive traffic as they have high
            volume with lower competition
          </li>
          <li>
            Combine technologies (e.g., "python for data analysis") to target
            specific learner interests
          </li>
          <li>
            Include location-specific modifiers like "near me" or "online" for
            local/remote targeting
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeywordRecommendations;
