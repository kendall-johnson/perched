import React, { useState, useEffect } from 'react';
import { createSkill, deleteSkill, getSkill } from '../../utilities/skills-api';

export default function SkillCard({user}) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  async function handleAddSkill() {
    if (newSkill.trim() !== '') {
      try {
        const createdSkill = await createSkill({ skill: newSkill });
        setSkills([...skills, createdSkill.skill]);
        setNewSkill('');
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handleRemoveSkill(skillToRemove) {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    try {
      await deleteSkill(skillToRemove);
      setSkills(updatedSkills);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkill(user._id);
        setSkills(skillsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, [skills]); // Specify skills as the dependency

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
            className="flex-grow px-4 py-2 mr-2 border rounded-md focus:outline-none"
          />
          <button
            onClick={handleAddSkill}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Skill
          </button>
        </div>
        {skills.length > 0 ? (
          <ul className="list-disc pl-6">
            {skills.map((skill, index) => (
              <li key={index} className="mb-2">
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No skills added yet.</p>
        )}
      </div>
    </>
  );
}