import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Packages() {
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/showPackages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Réponse de l'API non valide");
      }

      const json = await res.json();
      // console.log(json);
      setPackages(json);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div>
      {packages.map((packageItem) => (
        <Card key={packageItem.id}>
          <CardHeader>
            <CardTitle>{packageItem.title}</CardTitle>
            <CardDescription>{packageItem.s}</CardDescription>
          </CardHeader>
          <CardContent>
            {packageItem.service}
          </CardContent>
          <CardFooter>
            {packageItem.price}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Packages;
